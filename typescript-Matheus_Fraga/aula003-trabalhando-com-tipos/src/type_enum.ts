// Enum é um tipo que não existe no JS
// Utilizado para enumerar tipos de dados

enum DesignColors {
    white = "FFFFFF",
    black = "000000"
}

console.log(DesignColors);
console.log(DesignColors.white);
console.log(DesignColors.black);

enum StatusPermission {
    ADMIN,
    USER,
    SUPPORT
};
console.log(StatusPermission);
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
console.log(StatusPermission.SUPPORT);