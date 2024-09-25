package com.travels.travels.domain.travel;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "travel")
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String[] spots;
}
