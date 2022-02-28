import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

import { STARSHIPS } from './starships.mock'
import { Starship } from './starship.entity';

@Injectable()
export class StarshipsService {
    starships = STARSHIPS;

    constructor(@InjectRepository(Starship) private starshipsRepository: Repository<Starship>) { }

    async fetchAll(paginate = {}): Promise<Starship[]> {
        return await this.starshipsRepository.find({
            ...paginate
        });
    }

    async fetchByName(shipname: string): Promise<Starship> {
        return await this.starshipsRepository.findOne({ where: { name: shipname}});
    }

    async create(starship: Starship) {
        this.starshipsRepository.save(starship)
    }
}
