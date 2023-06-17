package com.cogniweb.habilizer.model;

import jakarta.annotation.Generated
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import lombok.AllArgsConstructor
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp
import org.jetbrains.annotations.NotNull
import java.util.Date


@Entity
@Table(name = "habit")
@NoArgsConstructor
@AllArgsConstructor
class Habit(
        @Id @Generated
        var id: Long? = null,
        var title: String? = null,
        var description: String? = null,
        var done: Boolean = false,
        @CreationTimestamp
        @NotNull
        var until: Date = Date(),
        var createdAt: Date = Date(),
        var createdBy: User,
)
