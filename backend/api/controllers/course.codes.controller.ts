import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { CourseCode } from '../model/models';
import { getRepository } from 'typeorm';

@JsonController('/codes')
export class CourseCodesController {

  private service = getRepository(CourseCode);

  @Get('/get')
  async get() {
    console.log('hehhheh')
    return await this.service.find();
  }

  @Get('/test')
  test() {
    return ['ff', 'eee'];
  }

  @Get('/getOne/:id')
  async getOne(@Param('id') id: number) {
    return await this.service.findOne(id);
  }

  @Post('/post')
  async post(@Body() model: CourseCode) {
    return await this.service.save(model);
  }

  @Put('/put/:id')
  async put(@Param('id') id: number, @Body() model: CourseCode) {
    return await this.service.update(id, model);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: number) {
    return await this.service.delete(id);
  }

}
