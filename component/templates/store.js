/*
<%= header %>
*/
import postal from 'postal';

const <%= _.camelCase(name) %>Channel = postal.channel('<%= _.camelCase(name) %>');

postal.subscribe('action', ({option}, envelope) => {
    // ...
});

export default <%= _.camelCase(name) %>Channel;
