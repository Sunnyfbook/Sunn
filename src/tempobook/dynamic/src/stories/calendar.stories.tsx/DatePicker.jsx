
            import { DatePicker } from "./../../../../../stories/calendar.stories.tsx";

            const TempoComponent = () => {
              return DatePicker.render(DatePicker.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;