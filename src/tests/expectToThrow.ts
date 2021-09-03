export const expectToThrow = (
    func: () => unknown,
    error?: string,
): void => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => null);

    expect(func).toThrow(error);

    spy.mockRestore();
};
