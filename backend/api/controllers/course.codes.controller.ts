import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { CourseCode } from '../model/models';
import { getRepository } from 'typeorm';

@JsonController('/codes')
export class CourseCodesController {

  private service = getRepository(CourseCode);


  @Post('/post')
  async post(@Body() model: CourseCode) {
    return await this.service.save(model);
  }

  @Put('/put/:id')
  async put(@Param('id') id: number, @Body() model: CourseCode) {
    return await this.service.update(id, model);
  }

  @Get('/get/:id')
  async get(@Param('id') id: number) {
    return await this.service.findOne(id);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }

}
