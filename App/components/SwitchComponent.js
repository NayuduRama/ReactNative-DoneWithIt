import React, { useState } from 'react';
import { Switch } from 'react-native';

function SwitchComponent(props) {
    const [isNew, setIsNew] = useState(false)
    return (
        <Switch 
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
        >
        </Switch>
    );
}

export default SwitchComponent;