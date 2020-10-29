import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { INSTANCE_ID_SYMBOL } from '@nestjs/core/injector/instance-wrapper';
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Effendi',
            brand: 'EffendiCoffee',
            flavors: ['choco', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        const coffee =  this.coffees.find(item => item.id === +id);
        
        if(!coffee) {
            throw new NotFoundException(`Coffee ${id} not found`);
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if(existingCoffee) {
            // update existing entity
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
