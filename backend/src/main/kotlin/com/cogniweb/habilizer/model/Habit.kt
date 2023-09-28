package com.cogniweb.habilizer.model;

import jakarta.persistence.*
import lombok.NoArgsConstructor
import org.hibernate.annotations.CreationTimestamp
import java.util.Date


@Table(name = "habit")
@Entity
data class Habit(
    @Id
    var id: Long?,
    val title: String?,
    val description: String?,
    val done: Boolean,
    @CreationTimestamp
    @Column(name = "until_date")
    val until: Date,

    ) : BaseModel() {
    constructor() : this(null, "", "", false, Date()) {

    }


}

