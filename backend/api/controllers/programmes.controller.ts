import { JsonController, Param, Body, Get, Post, Put, Delete, UseBefore, Res } from 'routing-controllers';
import { Programme } from '../model/models';
import { Response } from 'express';
import { getRepository, Repository, Like, FindManyOptions } from 'typeorm';
import { JwtMiddleware } from '../middleware/jwt.middleware';

@JsonController('/programmes')
export class ProgrammesController {

  private service = getRepository(Programme);


  @Get('/getAll/:startIndex/:pageSize/:filter?')
  async getAll(@Param('startIndex') startIndex, @Param('pageSize') pageSize, @Param('filter') filter: string, @Res() response: Response) {
    const opts = {
      skip: startIndex,
      take: pageSize,
      relations: ['user'],
      where: { titre: Like(`%${filter === '*' ? '' : filter}%`) },
      order: { id: 'DESC' }
    }

    return await this.service.findAndCount(opts as any);
  }


  @UseBefore(JwtMiddleware)
  @Get('/getCreated/:startIndex/:pageSize/:idUser/:filter')
  async getCreated(@Param('startIndex') startIndex, @Param('pageSize') pageSize
    , @Param('idUser') idUser, @Param('filter') filter: string, @Res() response: Response) {

    const userId = response.locals.jwtPayload.userId as number;

    let opts = {
      skip: startIndex,
      take: pageSize,
      relations: ['user'],
      where: { userId: idUser, titre: Like(`%${filter === '*' ? '' : filter}%`) },
    }

    return await this.service.findAndCount(opts);
  }

  @Post('/post')
  async post(@Body() model: Programme) {
    return await this.service.save(model);
  }

  @Put('/put/:id')
  async put(@Param('id') id: number, @Body() model: Programme) {
    return await this.service.update(id, model);
  }

  @UseBefore(JwtMiddleware)
  @Get('/get/:id')
  async get(@Param('id') id: number, @Res() response: Response) {

    const userId = response.locals.jwtPayload.userId as number;

    const p2 = await this.service.createQueryBuilder('p')
      .leftJoinAndSelect("p.user", "user")
      .leftJoinAndSelect("p.courses", "course")
      .leftJoinAndSelect("course.coursecodes", "coursecode", "coursecode.userId = :userId", { userId: userId })
      .where("p.id = :id", { id: id })
      .getOne();

    return p2;
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }

}
