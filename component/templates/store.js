/*
<%= header %>
*/
import postal from 'postal';

const <%= _.camelCase(name) %>Channel = postal.channel('<%= _.camelCase(name) %>');

<%= _.camelCase(name) %>Channel.subscribe('action', ({option}, envelope) => {
    // ...
});

export default <%= _.camelCase(name) %>Channel;
