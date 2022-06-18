const {pick} = require('ramda')

module.exports = ({request, session, version}) => {
    const req = request['original_utterance'].toLowerCase();
    const responseBody = {
        text: req,
        tts: req,
        end_session: false,
    };

    const response = {
        response: responseBody,
        session: pick(['session_id', 'message_id', 'user_id'], session),
        version,
    };

    if (req.includes('вездеход') && req.includes('злой гном')) {
        return {
            ...response,
            response: {
                ...responseBody,
                text: 'Привет вездекодерам!',
                tts: 'Привет вездек`одерам!',
            }
        };
    }

    return response;
}
