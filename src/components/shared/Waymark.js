import React from 'react';

export function Waymark(props) {
  const { type } = props;
  if (!type) return null;
  var classText = 'waymark-' + type.toLowerCase()

  return (
    <font
      class={ classText }>
      { type.toUpperCase() }
    </font>
  );
}

export function WaymarkA() {
  return <Waymark type="A" />;
}

export function WaymarkB() {
  return <Waymark type="B" />;
}

export function WaymarkC() {
  return <Waymark type="C" />;
}

export function WaymarkD() {
  return <Waymark type="D" />;
}

export function Waymark1() {
  return <Waymark type="1" />;
}

export function Waymark2() {
  return <Waymark type="2" />;
}

export function Waymark3() {
  return <Waymark type="3" />;
}

export function Waymark4() {
  return <Waymark type="4" />;
}