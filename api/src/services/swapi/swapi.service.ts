import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, firstValueFrom, map, tap } from 'rxjs';
//import { Starship } from 'src/starships/starship.entity';

@Injectable()
export class SwapiService {
    swapi_url = 'https://swapi.dev/api/starships';

    constructor(private httpService: HttpService) {}

    async findAll(page?: string) {
        let url = this.swapi_url
        if(page) {
            url += '?page=' + page
        }
        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }
}
