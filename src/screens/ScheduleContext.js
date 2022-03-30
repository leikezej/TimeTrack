import { createContext } from 'react';

import type { onCellLongPress, onCellPress } from './Content/Cell';
import type {
  onScheduleLongPress,
  onSchedulePress,
} from './Content/Scheduling';
import type {
  CellDimensions,
  CellSettings,
  DaysWeek,
  EndHour,
  HeaderSettings,
  Hours,
  ScheduleView,
  Scheduling,
  SchedulingSettings,
  SelectedDate,
  SidebarSettings,
  StartHour,
} from './types';

type ScheduleContext = {
  /**
   * Para marcar a data ativa (atual) na Agenda.
   * O padrão é a data atual do sistema.
   *
   * @default 'new Date()'
   */
  selectedDate: SelectedDate;
  /**
   * É usado para especificar a hora de início, a partir da qual a Agenda começa a ser exibida.
   *
   * @default '00:00'
   */
  startHour: StartHour;
  /**
   * É usado para especificar a hora final, na qual a Agenda termina. Ele também aceita uma string de tempo.
   *
   * @default '24:00'
   */
  endHour: EndHour;
  /**
   * Para definir a visualização ativa no agendador, a propriedade `currentView` pode ser usada e geralmente aceita qualquer um dos seguintes disponíveis
   * opções de visualização. A opção de visualização especificada nesta propriedade será inicialmente carregada no agendamento.
   *
   * * day
   * * week
   *
   * @default 'week'
   */
  currentView: ScheduleView;
  schedules: Array<Scheduling>;
  rawSchedules: Array<Scheduling>;
  days: Array<number>;
  hours: Hours;
  daysWeek: DaysWeek;
  cellDimensions: CellDimensions;
  headerSettings: HeaderSettings;
  sidebarSettings: SidebarSettings;
  cellSettings: CellSettings;
  schedulingSettings: SchedulingSettings;
  onCellPress?: onCellPress;
  onCellLongPress?: onCellLongPress;
  onSchedulePress?: onSchedulePress;
  onScheduleLongPress?: onScheduleLongPress;
};

const ScheduleContext = createContext({} as ScheduleContext);

export default ScheduleContext;