package com.cogniweb.habilizer.service

import com.cogniweb.habilizer.model.Habit
import com.cogniweb.habilizer.repository.HabitRepository
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class HabitService(val habitRepository: HabitRepository) {

    fun getAllHabit(): Flux<Habit> = habitRepository.findAll()

    fun getHabitById(id: Long): Mono<Habit>? = habitRepository.findById(id)
}