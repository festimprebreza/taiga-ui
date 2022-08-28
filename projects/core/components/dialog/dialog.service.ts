import {Injectable, inject} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {TUI_DIALOG_OPTIONS} from '@taiga-ui/core/tokens/dialog-options';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';

const DIALOG = new PolymorpheusComponent(TuiDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiDialogService extends AbstractTuiDialogService<TuiDialogOptions<any>> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiDialogOptions<any> = {...inject(TUI_DIALOG_OPTIONS), data: undefined};
}
