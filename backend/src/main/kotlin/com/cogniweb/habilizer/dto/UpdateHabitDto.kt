package com.cogniweb.habilizer.dto

import com.fasterxml.jackson.annotation.JsonFormat
import org.jetbrains.annotations.NotNull
import java.util.*

class UpdateHabitDto(@NotNull private val category: String,
                     @NotNull private val description: String,
                     @NotNull private val done: Boolean,
                     @NotNull @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ssZ", timezone = "GMT") private val until: Date)