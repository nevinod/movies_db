import React, { useEffect, useState } from "react";

export default function Example() {
  const [state, setState] = useState<Number>(0);

  return <div>This component's value is <strong>{state}</strong></div>;
}
