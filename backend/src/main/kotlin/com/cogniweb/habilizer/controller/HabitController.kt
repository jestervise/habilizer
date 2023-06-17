package com.cogniweb.habilizer.controller;

import com.cogniweb.habilizer.dto.HabitPaginationDto;
import com.cogniweb.habilizer.dto.UpdateHabitDto
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
@RequestMapping("/api/v1/habit")
public class HabitController {
    private val log = LoggerFactory.getLogger(HabitController::class.java)

    @GetMapping
    fun getAllHabit(): Flux<HabitPaginationDto> {
        return Flux.just(HabitPaginationDto())
    }

    @GetMapping("/{id}")
    fun getHabit(@PathVariable id: String): Mono<HabitPaginationDto> {
        log.info(id);
        return Mono.just(HabitPaginationDto())
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
