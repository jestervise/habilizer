package com.cogniweb.habilizer.model

import jakarta.persistence.Table
import java.time.LocalDate

@Table(name = "music_album")
data class MusicAlbum(val id: Long, val author: Author, val releaseDate: LocalDate, val title: String, val image: String)