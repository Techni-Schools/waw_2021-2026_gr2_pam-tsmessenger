import {useEffect} from "react";
import {useIsFocused} from "@react-navigation/native"

const useFocusEffect = (
    callback: React.EffectCallback,
    deps: React.DependencyList | undefined) => {
    const isFocused = useIsFocused();
    useEffect(() => {
        if (!isFocused) return
        callback()
    }, [isFocused, ...(deps ?? [])])
}

export default useFocusEffect;