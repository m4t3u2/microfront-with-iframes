export const getUsers = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Mateus Simon',
            website: 'simon.dev.br',
        },
        trackingProperties,
    };

    source.postMessage(messageResponse, '*');
};
