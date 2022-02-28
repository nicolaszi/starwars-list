import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { SwapiService } from 'src/services/swapi/swapi.service';
import { Starship } from './starship.entity';
import { Paginate } from 'src/interfaces/paginate.interface';

@Controller('starships')
export class StarshipsController {
    constructor(
        private starshipsService: StarshipsService, 
        private swapiService: SwapiService
        ) {}

    @Get()
    async getStarships(@Query() query) {
        const paginateParams:Paginate = query;
        const starships = await this.starshipsService.fetchAll(paginateParams);
        return starships
    }

    @Post()
    create(@Body() starship: Starship) {
        return this.starshipsService.create(starship);
    }

    @Get('/init')
    async initSwapiData() {
        let starships_swapi = await this.swapiService.findAll()
        let starships = starships_swapi.results
        let next_call = starships_swapi.next
        while(next_call) {
            const page = next_call.split('page=')[1]
            starships_swapi = await this.swapiService.findAll(page)
            starships = starships.concat(starships_swapi.results)
            next_call = starships_swapi.next
        }

        let count = 0
        await Promise.all(starships.map(async (starship: any) => {
            try {
                const isStarshipExists = await this.starshipsService.fetchByName(starship.name)
                if(!isStarshipExists) {
                    this.starshipsService.create(starship)
                    count++
                }
            } catch {
            }
        }));

        return `${count} nouveau vaisseau ajouté`
    }
}
