-- CreateTable
CREATE TABLE `Projeto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_oficial` VARCHAR(191) NOT NULL,
    `favorito` BOOLEAN NOT NULL,
    `endereco` VARCHAR(191) NULL,
    `cep` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `estado` VARCHAR(191) NULL,
    `pais` VARCHAR(191) NULL,
    `autor` VARCHAR(191) NULL,
    `ano` VARCHAR(191) NULL,
    `executor` VARCHAR(191) NULL,
    `ano_da_construcao` VARCHAR(191) NULL,
    `area_do_terreno` VARCHAR(191) NULL,
    `area_construida` VARCHAR(191) NULL,
    `apartamentos` VARCHAR(191) NULL,
    `numero_de_pavimentos` VARCHAR(191) NULL,
    `subsolo` VARCHAR(191) NULL,
    `elevadores` VARCHAR(191) NULL,
    `paisagismo` VARCHAR(191) NULL,
    `obras_de_arte` VARCHAR(191) NULL,
    `proprietario_original` VARCHAR(191) NULL,
    `fonte` VARCHAR(191) NULL,
    `programa` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `file` VARCHAR(191) NULL,
    `projetoId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Imagem` ADD CONSTRAINT `Imagem_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `Projeto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
