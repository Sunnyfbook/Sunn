
            import { Notifications } from "./../../../../../stories/card.stories.tsx";

            const TempoComponent = () => {
              return Notifications.render(Notifications.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;