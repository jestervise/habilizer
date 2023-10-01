package com.cogniweb.habilizer.model

import jakarta.persistence.FetchType
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import org.hibernate.annotations.CreationTimestamp
import org.hibernate.annotations.UpdateTimestamp
import java.util.*

open class BaseModel {
    @CreationTimestamp
    var createdAt: Date? = null
    @UpdateTimestamp
    var updatedAt: Date? = null
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    val AuthUser: AuthUser? = null
}