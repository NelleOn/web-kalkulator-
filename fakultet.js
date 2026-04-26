export function fakultet(tall) {
    if (tall <= 0) {
        return 1;
    }
    return tall * fakultet(tall - 1);
}
