package com.cogniweb.habilizer.repository

import com.cogniweb.habilizer.model.Habit
import org.springframework.data.r2dbc.repository.R2dbcRepository

interface HabitRepository:R2dbcRepository<Habit,Long>