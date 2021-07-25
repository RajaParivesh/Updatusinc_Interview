import { Body, Param } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {

    constructor(private teamsService:TeamsService){ }

    @Get()
    getTeams(): Array<any> {
      return this.teamsService.getTeams();
    }
      
    @Post()
    createTeams(@Body() data){
        this.teamsService.createTeams(data);
    }

    @Patch("/:teamName")
    updateTeams(@Param('teamName') teamName,@Body() data){
        return this.teamsService.updateTeams(teamName,data);
    }
}

