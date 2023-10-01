package com.cogniweb.habilizer.model;

import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Table(name = "auth_user")
@Entity
data class AuthUser(
    @Id
    var id: Long?,
    val name: String,
) {
    constructor() : this(null, "") {

    }
}
