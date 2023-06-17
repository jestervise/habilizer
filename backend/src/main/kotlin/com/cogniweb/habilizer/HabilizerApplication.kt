package com.cogniweb.habilizer

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.r2dbc.R2dbcAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [R2dbcAutoConfiguration::class])
class HabilizerApplication

fun main(args: Array<String>) {
	runApplication<HabilizerApplication>(*args)
}
