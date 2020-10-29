import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
        // This action returns all coffees. Limit: ${limit}, offset: ${offset}
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        this.coffeesService.findOne('' + id);
        // This action returns #${id} coffee
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
       this.coffeesService.create(createCoffeeDto);
       // This action creates a coffee
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        this.coffeesService.update(id, updateCoffeeDto);
        // This action updates #${id} coffee
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.coffeesService.remove(id);
        // This action removes #${id} coffee
    }
}
