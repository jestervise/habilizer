package com.cogniweb.habilizer.model

data class Author(val id: Long, val name: String, val surname: String) {
    fun getFullName(): String = "$name $surname"
}
