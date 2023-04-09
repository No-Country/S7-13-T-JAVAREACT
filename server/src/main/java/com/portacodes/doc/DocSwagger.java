package com.portacodes.doc;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;

public class DocSwagger {

    @Bean
    public OpenAPI custonOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("PortaCode API")
                        .version("1.0")
                        .description("Aplicacion para creacion de portafolios para desarrolladores")
                        .termsOfService("http://swagger.io/terns/")
                        .license(new License().name("Apache 2.0").url("http://springdoc.org")));
    }

}
