package com.cogniweb.habilizer.controller;

import com.cogniweb.habilizer.dto.HabitPaginationDto
import com.cogniweb.habilizer.dto.UpdateHabitDto
import com.cogniweb.habilizer.model.Habit
import com.cogniweb.habilizer.service.HabitService
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/v1/habit")
class HabitController(val habitService: HabitService) {
    private val log = LoggerFactory.getLogger(HabitController::class.java)

    @GetMapping
    fun getAllHabit(): Flux<Habit> {
        println("ehe")
        //change to dto
        return habitService.getAllHabit()
    }

    @GetMapping("/{id}")
    fun getHabit(@PathVariable id: Long): Mono<Habit>? {
        log.info("Update habit by id  --> {}",id);
        //change to dto
        return habitService.getHabitById(id)
    }

    @PutMapping("/{id}")
    fun updateHabit(@PathVariable id: String, @RequestBody habit: UpdateHabitDto): Mono<HabitPaginationDto> {
        return Mono.just(HabitPaginationDto())
    }

    @PostMapping
    fun createHabit(): Mono<HabitPaginationDto> {
        return Mono.just(HabitPaginationDto())
    }
}
