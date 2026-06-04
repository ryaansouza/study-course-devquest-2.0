function printArray<T>(arr: T[]): void {
    arr.forEach(item => console.log(item));
}

printArray([1, 2, 3]);
printArray(['a', 'b', 'c']);