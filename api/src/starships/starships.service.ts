import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

import { Starship } from './starship.entity';

@Injectable()
export class StarshipsService {
    constructor(@InjectRepository(Starship) private starshipsRepository: Repository<Starship>) { }

    async fetchAll(paginate = {}) {
        let [starships, starshipsCount] =  await this.starshipsRepository.findAndCount({...paginate});
        return {
            data: starships,
            count: starshipsCount
        };
    }

    async fetchByName(shipname: string): Promise<Starship> {
        return await this.starshipsRepository.findOne({ where: { name: shipname}});
    }

    async create(starship: Starship) {
        this.starshipsRepository.save(starship)
    }
}
