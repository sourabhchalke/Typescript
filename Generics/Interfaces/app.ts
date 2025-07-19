// Generic Interface

interface Box<T> {
    value: T;
  }
  
  const stringBox: Box<string> = { value: "hello" };
  const numberBox: Box<number> = { value: 123 };
  