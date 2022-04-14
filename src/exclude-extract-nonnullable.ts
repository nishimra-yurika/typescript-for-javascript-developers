export{}; 

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string|number>;
type NunFunctionType = Exclude<SomeTypes,DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctioTypeByExtract = Extract<SomeTypes,DebugType>;
type NunFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtract = Extract<SomeTypes,Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;