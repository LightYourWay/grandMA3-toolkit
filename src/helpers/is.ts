function isClass<T extends GenericObj>(className: string) {
	return (x: GenericObj): x is T => x.GetClass() === className;
}

export const is = {
	DataPools: isClass<DataPools>('DataPools'),
	Sequence: isClass<Sequence>('Sequence'),
	Macro: isClass<Macro>('Macro'),
};
