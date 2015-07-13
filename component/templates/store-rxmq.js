/*
<%= header %>
*/
import rxmq from 'rxmq';

const <%= _.camelCase(name) %>Channel = rxmq.channel('<%= _.camelCase(name) %>');

<%= _.camelCase(name) %>Channel.subject('action').subscribe(({option}, envelope) => {
    // ...
});

export default <%= _.camelCase(name) %>Channel;
