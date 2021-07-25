import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

export const option = new DocumentBuilder()
    .setTitle("API")
    .setDescription("Studovate APIs")
    .setVersion("1.0")
    .build();