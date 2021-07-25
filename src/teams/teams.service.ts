import { Injectable, NotFoundException } from '@nestjs/common';
import { Team } from './interface/team.interface';

@Injectable()
export class TeamsService {
    private teams: Team[] = []

    /*
    * GetTeams() : It will give you list of the teams
    */
    getTeams(): Array<Team> {
        return this.teams;
    }

    /*
    * createTeam() : It will add a new team in the teams array
    */
    createTeams(data: Team) {
        this.teams.push(data);
    }

    /*
    * getTeamByTeamName() : It will check, team is found or not
    */
    getTeamByTeamName(name: string) {
        const test = this.teams.filter(team => team.teamName === name)
        const found = this.teams.find(team => team.teamName === name);
        if (!found) new NotFoundException(`TeamName :${name} Not found`);
        return found;
    }

    /*
     * updateTeams() : This will update the team based on the teamName
     */
    updateTeams(teamName: string, newData: Team) {
        const team = this.getTeamByTeamName(teamName);
        if (team == undefined) return "teamName not found";
        team.teamName = newData.teamName;
        team.active = newData.active
        team.teamLocation = newData.teamLocation;
        team.yearFormed = newData.yearFormed;
        console.log(team);
        return team;
    }
}