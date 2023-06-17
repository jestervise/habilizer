package com.cogniweb.habilizer.repository;

import com.cogniweb.habilizer.model.Habit;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface HabitRepository extends ReactiveCrudRepository<Habit,Long> {
}
