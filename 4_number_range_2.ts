/**
 * I have purposely removed all RGB related code just for the
 * sake of readability
 */

// Decimal part
type DecimalPart = ComputeRange<99> // 0 .. 99

type AlphaChannel = `0.${DecimalPart}` | `${0 | 1}`

type Validate<Alpha extends number> = `${Alpha}` extends AlphaChannel ? Alpha : never

function alpha<Alpha extends number>(alpha: Validate<Alpha>) { }

alpha(0.455) // expected error, 3 digits after dot instead of 2

alpha(1) // OK

alpha(0.55) // OK


