
            import { DatePickerRange } from "./../../../../../stories/calendar.stories.tsx";

            const TempoComponent = () => {
              return DatePickerRange.render(DatePickerRange.args);
            }

            TempoComponent.getLayout = (page) => page;

            export default TempoComponent;