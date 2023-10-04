import { z } from 'zod'

export function localstorage(): string {
    return 'localstorage'
}

const localStorage = new Map()

const objectSchema = z.object({
    simpleToken: z.string().optional(),
    resetToken: z.string().optional(),
    complexToken: stringifyToken(
        z.object({
            iss: z.string().uuid(),
        })
    ),
})

type KeyValueMap = z.infer<typeof objectSchema>
type Key = keyof KeyValueMap
type Value<K extends Key> = KeyValueMap[K]

export const getLocalStorageItem = <K extends Key>(key: K) => {
    localStorage.get(key)
}

export const setLocalStorageItem = <K extends Key, V extends Value<K>>(
    key: K,
    value: V
) => {
    localStorage.set(key, value)
}

function stringifyToken(ObjectSchema: z.ZodSchema) {
    return z.string().transform((arg) => {
        ObjectSchema?.parse(arg)
    })
}
