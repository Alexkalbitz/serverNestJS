import { Get, Controller, Param, Query, Body, Post, UsePipes, ValidationPipe, UseFilters, Put, Patch, Delete, HttpCode } from '@nestjs/common';
import { MatchService } from './match.service';
import {MatchDto} from './dto/match.dto';
import { MatchErrorFilter } from './match.error.filter';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('/api')
@UsePipes(ValidationPipe)

@UseFilters(MatchErrorFilter)
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/matches')
  public async getAllMatches(): Promise<MatchDto[]> {
    return this.matchService.getAllMatches();
  }

  @Get('/match/:matchId')
  public async getMatchById(@Param('matchId', ParseUUIDPipe) matchId: string): Promise<MatchDto> {
    return this.matchService.getMatchById(matchId);
  }

  @Post('/match')
  public async createNewMatch(
    @Body() newMatch: MatchDto,
  ): Promise<MatchDto> {
    return this.matchService.createNewMatch(newMatch);
  }

  @Put('/match/:id')
  public async updateMatch(
    @Param('id', ParseUUIDPipe) matchId: string,
    @Body() updatedMatch: MatchDto,
  ): Promise<MatchDto> {
    return this.matchService.updateMatch(matchId, updatedMatch);
  }

  @Patch('/match/:id/finish')
  public async finishMatch(
    @Param('id', ParseUUIDPipe) matchId: string,
  ): Promise<MatchDto> {
    return this.matchService.finishMatch(matchId);
  }

  @Delete('/match/:id')
  @HttpCode(204)
  public async deleteMatch(
    @Param('id', ParseUUIDPipe) matchId: string,
  ): Promise<void> {
    await this.matchService.deleteMatch(matchId);
  }

  @Delete('/allmatches')
  @HttpCode(204)
  public async deleteAllMatches(): Promise<void> {
    await this.matchService.deleteAllMatches();
  }

  @Patch('/match/:id/goalHomeTeam')
  public async goalHomeTeam(
    @Param('id', ParseUUIDPipe) matchId: string,
    
  ): Promise<MatchDto> {
    return this.matchService.goalHomeTeam(matchId);
  }

  @Patch('/match/:id/goalGuestTeam')
  public async goalGuestTeam(
    @Param('id', ParseUUIDPipe) matchId: string,
    
  ): Promise<MatchDto> {
    return this.matchService.goalGuestTeam(matchId);
  }

}
