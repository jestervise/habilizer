//import org.springframework.context.annotation.Bean
//import org.springframework.context.annotation.Configuration
//import org.springframework.security.config.annotation.web.builders.HttpSecurity
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity
//import org.springframework.security.config.web.server.ServerHttpSecurity
//import org.springframework.security.web.server.SecurityWebFilterChain
//
//
//@Configuration
//@EnableWebFluxSecurity
//class HelloWebfluxSecurityConfig {
//
//    @Bean
//    fun securityWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
//        return http
//                .authorizeExchange {
//                    x->x.anyExchange().permitAll().anyExchange().authenticated()
//                }
//        .build()
//    }
//
//    @Bean
//    fun springWebFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
//        return http
//                .authorizeExchange {
//                    x->x.anyExchange().permitAll().anyExchange().authenticated()
//                }
//                .build()
//    }
//}