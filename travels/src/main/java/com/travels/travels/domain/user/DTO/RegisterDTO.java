package com.travels.travels.domain.user.DTO;

import com.travels.travels.domain.user.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
}
